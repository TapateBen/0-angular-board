import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { SecretComponent } from './secret/secret.component';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [RegisterComponent, SecretComponent],
  imports: [ CommonModule,  SecurityRoutingModule, ReactiveFormsModule, HttpClientModule ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    }
  ]
})
export class SecurityModule { }
