import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment'

import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../../auth-module/auth.service'
import { NotificationService } from '../../general/notification.service'

import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import Swal from 'sweetalert2';
import { helper } from '../../../environments/helper'
import { DgitlService } from '../dgitl.service'
import { StorageService } from '../../general/storage.service'

import { MatDialog } from '@angular/material/dialog';


import { cloneDeep, random } from 'lodash-es';
import {
    GlobalConfig,
    ToastrService,
    ToastContainerDirective,
    ToastNoAnimation,
} from 'ngx-toastr';

@Component({
    selector: 'app-solicitari',
    templateUrl: './solicitari.component.html',
    styleUrls: ['./solicitari.component.sass']
})
export class SolicitariComponent implements OnInit {

    // general error
    errorTitle: string = environment.config.customNotifications.headers.error
    errorIcon: string = environment.config.customNotifications.icons.error
    errorType: string = environment.config.customNotifications.icons.error
    // general success alert
    successTitle: string = environment.config.customNotifications.headers.success
    successIcon: string = environment.config.customNotifications.icons.success
    successType: string = environment.config.customNotifications.icons.success

    @ViewChild('ngxLoading') ngxLoadingComponent: NgxLoadingComponent;
    @ViewChild('customLoadingTemplate') customLoadingTemplate: TemplateRef<any>;
    public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    public loading = false;
    public loadingTemplate: TemplateRef<any>;

    faStar = faStar;
    faPlus = faPlus;
    faAngleDown = faAngleDown;
    faSearch = faSearch;
    faTags = faTags;
    faCalendarAlt = faCalendarAlt;

    loaded: number = 0
    records: any = []

    page = 1;
    pageSize = 5;
    collectionSize: any = 0;
    data: any = []

    constructor(
        private dgitlService: DgitlService,
        private notificationService: NotificationService,
        private localStorage: StorageService,
        public toastr: ToastrService,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {

        this.getData()
    }

    refreshData() {
        var self=  this
        self.loaded = 1
        this.data = this.records
            .map((data, i) => ({ id: i + 1, ...data }))
            .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }

    async getData() {

        var self = this

        try {
            self.dgitlService.listSolicitari()
                .then(async (res) => {
                    let response = (typeof res.status_code !== 'undefined' ? res : res.error)
                    if (typeof response.status_code !== 'undefined') {
                        if (response.status_code == 200 && typeof response.data !== 'undefined') {
                            console.log(response.data)
                            self.collectionSize = response.data.length
                            self.records = response.data
                            self.refreshData();
                            return false;

                        } else {
                            let errorMessage = environment.config.customNotifications.generalMessages.error;
                            response.errors.message.forEach(function (msg) {
                                errorMessage = msg;
                            })
                            await self.notificationService.warningSwal(
                                self.errorTitle, errorMessage, self.errorIcon
                            );

                            return false;
                        }

                    } else {
                        // add sentry
                        let errorMessage = environment.config.customNotifications.generalMessages.error;
                        await self.notificationService.warningSwal(
                            self.errorTitle, errorMessage, self.errorIcon
                        );

                        return false
                    }
                })
                .catch(async err => {
                    let errorMessage = environment.config.customNotifications.generalMessages.error;
                    await self.notificationService.warningSwal(
                        self.errorTitle, errorMessage, self.errorIcon
                    );

                    return false
                })

        } catch (err) {
            console.log(err)
            await self.notificationService.warningSwal(this.errorTitle, 'Am intampinat o problema in procesarea informatiilor dvs. Va rugam sa reincercati sau sa reveniti mai tarziu.', this.errorIcon)
        }

    }

}
