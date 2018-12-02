import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule,

  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  DateAdapter,

  MatChipsModule,
  MatTooltipModule,
  MatSnackBarModule,

  MatSliderModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,

  MatCardModule,
  MatDialogModule,

  MatDividerModule,
  MatExpansionModule,
  MatTreeModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatOptionModule,
  MatTabsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatRippleModule
} from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { LayoutModule } from '@angular/cdk/layout';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { PlatformModule } from '@angular/cdk/platform';

@NgModule({
  imports: [],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,

    FlexLayoutModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,

    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,

    MatSliderModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,

    MatCardModule,
    MatDialogModule,

    MatExpansionModule,
    MatTabsModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    MatDividerModule,
    MatTreeModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatOptionModule,
    MatRippleModule,

    A11yModule,
    BidiModule,
    LayoutModule,
    ObserversModule,
    OverlayModule,
    PortalModule,
    ScrollDispatchModule,
    CdkTableModule,
    CdkTreeModule,
    CdkAccordionModule,
    PlatformModule
  ],
  providers: []
})
export class MaterialSharedModule { }
