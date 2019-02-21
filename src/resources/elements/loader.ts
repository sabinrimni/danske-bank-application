import { DialogController } from "aurelia-dialog";
import { inject } from "aurelia-framework";
@inject(DialogController)
export class Loader {
  private controller: DialogController;
  private result: string;
  constructor(dialogController: DialogController) {
    this.controller = dialogController;
  }

  activate(result: string) {
    console.log("Result passed: ", result);
    this.result = result;
  }
}
