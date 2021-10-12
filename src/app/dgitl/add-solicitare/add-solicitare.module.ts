import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSolicitareRoutingModule } from './add-solicitare-routing.module'
import { AddSolicitareComponent } from './add-solicitare.component' 


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxLoadingModule } from 'ngx-loading';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

import { MatButtonModule } from '@angular/material/button';

// import { InfoSectionsModule } from './directives/info-sections/info-sections.module'

import { InfoSectionsComponent } from './directives/info-sections/info-sections.component';
import { SimpleElementComponent } from './directives/simple-element/simple-element.component';
import { BeneficiarFormComponent } from './directives/beneficiar-form/beneficiar-form.component';
import { BileteFormComponent } from './directives/bilete-form/bilete-form.component';
import { ContractePublicitateFormComponent } from './directives/contracte-publicitate-form/contracte-publicitate-form.component';
import { CoproprietariFormComponent } from './directives/coproprietari-form/coproprietari-form.component';
import { ImputernicitFormComponent } from './directives/imputernicit-form/imputernicit-form.component';
import { McGunoiComponent } from './directives/mc-gunoi/mc-gunoi.component';
import { MetodaRestituireComponent } from './directives/metoda-restituire/metoda-restituire.component';
import { NotarComponent } from './directives/notar/notar.component';
import { ProprietarNouComponent } from './directives/proprietar-nou/proprietar-nou.component';
import { TipBeneficiarComponent } from './directives/tip-beneficiar/tip-beneficiar.component';
import { TipScutireComponent } from './directives/tip-scutire/tip-scutire.component';
import { TipTaxaFormComponent } from './directives/tip-taxa-form/tip-taxa-form.component'

@NgModule({
	declarations: [AddSolicitareComponent, InfoSectionsComponent, SimpleElementComponent, BeneficiarFormComponent, BileteFormComponent, ContractePublicitateFormComponent, CoproprietariFormComponent, ImputernicitFormComponent, McGunoiComponent, MetodaRestituireComponent, NotarComponent, ProprietarNouComponent, TipBeneficiarComponent, TipScutireComponent, TipTaxaFormComponent],
	imports: [
		CommonModule,
		FontAwesomeModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatIconModule,
		MatCheckboxModule,
		MatFormFieldModule,
		NgxLoadingModule.forRoot({}),
		NgxMatIntlTelInputModule,
		AddSolicitareRoutingModule,
		MatSelectModule,
		// InfoSectionsModule,
		MatButtonModule
	]
})
export class AddSolicitareModule { }
