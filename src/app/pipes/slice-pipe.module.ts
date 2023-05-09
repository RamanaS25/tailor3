import { NgModule } from '@angular/core';
import { SlicePipePipe } from './slicepipe/slice-pipe.pipe';


@NgModule({
  declarations: [
    // other declarations
    SlicePipePipe
  ],
  imports: [
    // other imports
  ],
  exports:[SlicePipePipe]
  // other properties
})
export class slicePipe { }