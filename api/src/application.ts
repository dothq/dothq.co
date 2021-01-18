import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RepositoryMixin } from '@loopback/repository';
import { 
  RestApplication, 
  RestBindings 
} from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';

import { MySequence } from './sequence';

export { ApplicationConfig };

export class Application extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    this.sequence(MySequence);

    this.bind(RestBindings.ERROR_WRITER_OPTIONS).to({ 
      safeFields: ["errorCode"],
      defaultType: "json",
      negotiateContentType: false
    });

    this.projectRoot = __dirname;

    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true
      },
    };
  }
}
