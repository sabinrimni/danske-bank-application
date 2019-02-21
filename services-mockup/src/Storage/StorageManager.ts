import { Person, Facility, Exposure } from './Model';
import * as fs from "fs";
import * as path from "path";
class StorageManager {
  private Persons: Array<Person>;
  private Failities: Array<Facility>;
  private Exposures: Array<Exposure>;
  constructor() {

    let storage = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./MockStorage.json"), "utf8"));
    this.Persons = storage.Persons;
    this.Failities = storage.Facilities;
    this.Exposures = storage.Exposures;
  }

  public getPerson(id: string): Person {
    return this.Persons.find(x => x.id == id);
  }

  public getFacility(val1: string): Facility {
    return this.Failities.find(x => x.val1 == val1);
  }

  public getExposure(val2: string): Exposure {
    return this.Exposures.find(x => x.val2 == val2);
  }
}
export default new StorageManager();
