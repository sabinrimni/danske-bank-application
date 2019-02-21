import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { Person, Facility, Exposure } from './resources/components/Model';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules
} from 'aurelia-validation';
import { inject } from 'aurelia-dependency-injection';
import { FormRenderer } from './resources/components/FormRederer';
import { ClientFetch } from './http-client';
import { Loader } from './resources/elements/loader';
import { DialogService } from 'aurelia-dialog';

@inject(ValidationControllerFactory, ClientFetch, DialogService)
export class App {
  public input: string = '';
  private client: ClientFetch;
  public dialogService: DialogService;
  private exposure: Exposure;
  private facility: Facility;
  private person: Person;
  public controller: ValidationController = null;


  constructor(public controllerFactory: ValidationControllerFactory, client: ClientFetch, dialogService: DialogService) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new FormRenderer());
    this.client = client;
    this.dialogService = dialogService;
  }

  submit() {
    this.controller.validate().then((value) => {
      if (value.valid) {
        this.getPerson(this.input);
      }
    });
  }

  getPerson(input: string): void {
    this.client.getData('person', input, this);
  }

  getExposure(val2: string): void {
    this.client.getData('exposure', val2, this);
  }

  getFacility(val1: string): void {
    this.client.getData('facility', val1, this);
  }

  processData(): void {
    if (this.facility && this.exposure) {
      let result = this.facility.val3 * this.exposure.val5;
      this.showDialog(result.toString());
    }
  }

  showDialog(result: string) {
    this.dialogService.open({ viewModel: Loader, model: result, lock: false }).whenClosed(response => {
      console.log(response.output);
    });
  }

  public returnFetchResponse(endpoint: string, data: any, error: boolean): void {
    if (error) {
      this.showDialog(data);
    } else if (endpoint == 'person') {
      this.person = data;
      this.getExposure(this.person.val2);
      this.getFacility(this.person.val1);
    } else if (endpoint == 'exposure') {
      this.exposure = data;
      this.processData();
    } else if (endpoint == 'facility') {
      this.facility = data;
      this.processData();
    }
  }

}

ValidationRules
  .ensure('input').required().minLength(1).matches(/^[a-zA-Z0-9]*$/)
  .on(App); 
