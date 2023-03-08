import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './component/modal/modal.component';
import { FormInlineErrorModule } from './component/form-inline-error/form-inline-error.module';
import { VerticalStepperComponent } from './component/vertical-stepper/vertical-stepper.component';
import { SectionDisplayerComponent } from './component/section-displayer/section-displayer.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { AgGridModule } from 'ag-grid-angular';
import { UiModule } from '@collab/comp-library';
import { TableGridComponent } from './component/table-grid/table-grid.component';
import { HeaderComponent } from './component/header/header.component';
import { TrapFocusDirective } from './directive/trap-focus.directive';
import { TableGridPaginationComponent } from './component/table-grid/table-grid-pagination/table-grid-pagination.component';
// import { FileUploadComponent } from './component/file-upload/file-upload.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormInlineErrorModule,
        UiModule,
        AgGridModule,
        FormsModule,
        ReactiveFormsModule,
    
    ],
    declarations: [
        ModalComponent,
        VerticalStepperComponent,
        SectionDisplayerComponent,
        ProgressBarComponent,
        TableGridComponent,
        HeaderComponent,
        TrapFocusDirective,
        TableGridPaginationComponent,
        // FileUploadComponent
    ],
    providers: [
    ],
    exports: [
        FormInlineErrorModule,
        ModalComponent,
        VerticalStepperComponent,
        ProgressBarComponent,
        UiModule, 
        TableGridComponent,
        HeaderComponent,
        TableGridPaginationComponent,
        AgGridModule,
        // FileUploadComponent
      
    ]
})
export class SharedModule {

    constructor() {
    }
}
