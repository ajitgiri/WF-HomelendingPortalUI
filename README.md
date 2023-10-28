# WFHomelendingPortalUI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


@@@ ##### **** ==== STARTED STEPS === **** ##### @@@
Step 1: Create Project 	>> ng new WF-HomelendingPortalUI
Step 5: 
	ng add @angular/material
		* UPDATE package.json (1462 bytes)
		* √ Packages installed successfully.
		* UPDATE src/app/app.module.ts (974 bytes)
		* UPDATE angular.json (4367 bytes)
		* UPDATE src/index.html (541 bytes)
		* UPDATE src/styles.css (181 bytes)
	ng g m commonmaterial [Creating a module to keep all Angular material related modules]
		* CREATE src/app/commonmaterial/commonmaterial.module.ts (200 bytes)
		/**
		 * This is the Common module we create for the Angular Material Components
		 * Instead of massing up material Components in app.module.ts file, will import & Export all modules here 
		 * 
		 * To create the module we use command : ng g m commonmaterial
		 * Now go to the commonmaterial/commonmaterial.module.ts
		 *      Delete common module : @anular/common
		 *      create exports module inside @NgModule like above
		 *      Create 1 constant veriable to define all the imported commonmaterial modules : materialImportExportComponents
		 *      Use this created constant variable in imports and exports part : imports: [ materialImportExportComponents ],
		 * Now go to the app.module.ts, import the created commonmaterial module and decalre inside: imports: CommonmaterialModule 
		 */

Step 6: 
	ng g m authorization  --routing 
		* CREATE src/app/authorization/authorization-routing.module.ts (257 bytes)
		* CREATE src/app/authorization/authorization.module.ts (308 bytes)
		
		ng g c authorization/login
			* CREATE src/app/authorization/login/login.component.html (20 bytes)
			* CREATE src/app/authorization/login/login.component.spec.ts (621 bytes)
			* CREATE src/app/authorization/login/login.component.ts (271 bytes)
			* CREATE src/app/authorization/login/login.component.css (0 bytes)
			* UPDATE src/app/authorization/authorization.module.ts (313 bytes)
		ng g c authorization/registration
			* CREATE src/app/authorization/registration/registration.component.html (27 bytes)
			* CREATE src/app/authorization/registration/registration.component.spec.ts (670 bytes)
			* CREATE src/app/authorization/registration/registration.component.ts (299 bytes)
			* CREATE src/app/authorization/registration/registration.component.css (0 bytes)
			* UPDATE src/app/authorization/authorization.module.ts (415 bytes)
		
		ng g c authorization/profile
			* 		
			* 
Step 7: 
	ng g m authorization  --routing 


Step 8:
	ng g m volumeregulator  --routing
	
	ng g c volumeregulator/volumeregulator-details
		CREATE src/app/volumeregulator/volumeregulator-details/volumeregulator-details.component.html (38 bytes)
		CREATE src/app/volumeregulator/volumeregulator-details/volumeregulator-details.component.spec.ts (741 bytes)
		CREATE src/app/volumeregulator/volumeregulator-details/volumeregulator-details.component.ts (342 bytes)
		CREATE src/app/volumeregulator/volumeregulator-details/volumeregulator-details.component.css (0 bytes)
		UPDATE src/app/volumeregulator/volumeregulator.module.ts (841 bytes)

	ng g c volumeregulator/volumeregulator-list
		CREATE src/app/volumeregulator/volumeregulator-list/volumeregulator-list.component.html (35 bytes)
		CREATE src/app/volumeregulator/volumeregulator-list/volumeregulator-list.component.spec.ts (720 bytes)
		CREATE src/app/volumeregulator/volumeregulator-list/volumeregulator-list.component.ts (330 bytes)
		CREATE src/app/volumeregulator/volumeregulator-list/volumeregulator-list.component.css (0 bytes)
		UPDATE src/app/volumeregulator/volumeregulator.module.ts (973 bytes)

Step 9:
	 ng g m sysExceptionCustom  --routing
		CREATE src/app/sys-exception-custom/sys-exception-custom-routing.module.ts (262 bytes)
		CREATE src/app/sys-exception-custom/sys-exception-custom.module.ts (330 bytes)
	
	 ng g c sys-exception-custom/sysExceptionCustomColapsTable
		CREATE src/app/sys-exception-custom/sys-exception-custom-colaps-table sys-exception-custom-colaps-table.component.html (48 bytes)
		CREATE src/app/sys-exception-custom/sys-exception-custom-colaps-table/sys-exception-custom-colaps-table.component.spec.ts (793 bytes)
		CREATE src/app/sys-exception-custom/sys-exception-custom-colaps-table/sys-exception-custom-colaps-table.component.ts (379 bytes)     
		CREATE src/app/sys-exception-custom/sys-exception-custom-colaps-table/sys-exception-custom-colaps-table.component.css (0 bytes)      
		UPDATE src/app/sys-exception-custom/sys-exception-custom.module.ts (506 bytes)

	ng g c systemexception/exceptionPipeline     
		CREATE src/app/systemexception/exception-pipeline/exception-pipeline.component.html (33 bytes)
		CREATE src/app/systemexception/exception-pipeline/exception-pipeline.component.spec.ts (706 bytes)
		CREATE src/app/systemexception/exception-pipeline/exception-pipeline.component.ts (322 bytes)     
		CREATE src/app/systemexception/exception-pipeline/exception-pipeline.component.css (0 bytes)      
		UPDATE src/app/systemexception/systemexception.module.ts (686 bytes)
	ng g c systemexception/exceptionDetails 
		CREATE src/app/systemexception/exception-details/exception-details.component.html (32 bytes)
		CREATE src/app/systemexception/exception-details/exception-details.component.spec.ts (699 bytes)
		CREATE src/app/systemexception/exception-details/exception-details.component.ts (318 bytes)
		CREATE src/app/systemexception/exception-details/exception-details.component.css (0 bytes)
		UPDATE src/app/systemexception/systemexception.module.ts (806 bytes)
ng g m systemexception/exceptionAdmin --routing
	CREATE src/app/systemexception/exception-admin/exception-admin-routing.module.ts (258 bytes)
	CREATE src/app/systemexception/exception-admin/exception-admin.module.ts (313 bytes)

	CREATE src/app/systemexception/exception-admin/admin-home/admin-home.component.html (25 bytes)
	CREATE src/app/systemexception/exception-admin/admin-home/admin-home.component.spec.ts (650 bytes)
	CREATE src/app/systemexception/exception-admin/admin-home/admin-home.component.ts (290 bytes)
	CREATE src/app/systemexception/exception-admin/admin-home/admin-home.component.css (0 bytes)
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (403 bytes)

	CREATE src/app/systemexception/exception-admin/application-profile/create-application-profile/create-application-profile.component.html (41 bytes)
	CREATE src/app/systemexception/exception-admin/application-profile/create-application-profile/create-application-profile.component.spec.ts (756 bytes)
	CREATE src/app/systemexception/exception-admin/application-profile/create-application-profile/create-application-profile.component.ts (353 bytes)
	CREATE src/app/systemexception/exception-admin/application-profile/create-application-profile/create-application-profile.component.css (0 bytes)
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (557 bytes)

ng g c systemexception/exception-admin/error-code-details/createErrorCode
	CREATE src/app/systemexception/exception-admin/error-code-details/create-error-code/create-error-code.component.html (32 bytes)
	CREATE src/app/systemexception/exception-admin/error-code-details/create-error-code/create-error-code.component.spec.ts (693 bytes)
	CREATE src/app/systemexception/exception-admin/error-code-details/create-error-code/create-error-code.component.ts (317 bytes)     
	CREATE src/app/systemexception/exception-admin/error-code-details/create-error-code/create-error-code.component.css (0 bytes)      
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (1186 bytes)

ng g c systemexception/exception-admin/error-code-details/listOfErrorCode
	CREATE src/app/systemexception/exception-admin/error-code-details/list-of-error-code/list-of-error-code.component.html (33 bytes)
	CREATE src/app/systemexception/exception-admin/error-code-details/list-of-error-code/list-of-error-code.component.spec.ts (694 bytes)
	CREATE src/app/systemexception/exception-admin/error-code-details/list-of-error-code/list-of-error-code.component.ts (320 bytes)     
	CREATE src/app/systemexception/exception-admin/error-code-details/list-of-error-code/list-of-error-code.component.css (0 bytes)      
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (1325 bytes)

ng g c systemexception/exception-admin/error-code-details/viewErrorCode
	CREATE src/app/systemexception/exception-admin/error-code-details/view-error-code/view-error-code.component.html (30 bytes)
	CREATE src/app/systemexception/exception-admin/error-code-details/view-error-code/view-error-code.component.spec.ts (679 bytes)
	CREATE src/app/systemexception/exception-admin/error-code-details/view-error-code/view-error-code.component.ts (309 bytes)     
	CREATE src/app/systemexception/exception-admin/error-code-details/view-error-code/view-error-code.component.css (0 bytes)      
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (1454 bytes)

ng g c systemexception/exception-admin/resolution-step-details/createResolutionSteps
	CREATE src/app/systemexception/exception-admin/resolution-step-details/create-resolution-steps/create-resolution-steps.component.html (38 bytes)CREATE src/app/systemexception/exception-admin/resolution-step-details/create-resolution-steps/create-resolution-steps.component.spec.ts (735 bytes)
	CREATE src/app/systemexception/exception-admin/resolution-step-details/create-resolution-steps/create-resolution-steps.component.ts (341 bytes) 
	CREATE src/app/systemexception/exception-admin/resolution-step-details/create-resolution-steps/create-resolution-steps.component.css (0 bytes)  
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (1620 bytes)
ng g c systemexception/exception-admin/resolution-step-details/listOfResolutionSteps
	CREATE src/app/systemexception/exception-admin/resolution-step-details/list-of-resolution-steps/list-of-resolution-steps.component.html (39 bytes)
	CREATE src/app/systemexception/exception-admin/resolution-step-details/list-of-resolution-steps/list-of-resolution-steps.component.spec.ts (736 
	bytes)
	CREATE src/app/systemexception/exception-admin/resolution-step-details/list-of-resolution-steps/list-of-resolution-steps.component.ts (344 bytes)
	CREATE src/app/systemexception/exception-admin/resolution-step-details/list-of-resolution-steps/list-of-resolution-steps.component.css (0 bytes)UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (1788 bytes)
ng g c systemexception/exception-admin/resolution-step-details/viewResolutionSteps
	CREATE src/app/systemexception/exception-admin/resolution-step-details/view-resolution-steps/view-resolution-steps.component.html (36 bytes)
	CREATE src/app/systemexception/exception-admin/resolution-step-details/view-resolution-steps/view-resolution-steps.component.spec.ts (721 bytes)CREATE src/app/systemexception/exception-admin/resolution-step-details/view-resolution-steps/view-resolution-steps.component.ts (333 bytes)     
	CREATE src/app/systemexception/exception-admin/resolution-step-details/view-resolution-steps/view-resolution-steps.component.css (0 bytes)      
	UPDATE src/app/systemexception/exception-admin/exception-admin.module.ts (1946 bytes)

## BACKEND Service used for this app (SEW) :- Wellsfargo-3DA-App-Services
@@@ ##### **** ==== END STEPS === **** ##### @@@



## ====================== GIT PUSH ================== ##
It looks like a very basic question, still follow the below steps

Step 1: You need to create a github repository : WF-HomelendingPortal 
Step 2: Then copy HTTPS URL of the github repo : https://github.com/ajitgiri/WF-HomelendingPortal.git
Step 3: Then go to the local repo & make git repo : git int 
Step 4: Then the local repo with the created remote repo : git remote add origin https://github.com/ajitgiri/WF-HomelendingPortal.git
Step 5: check now with 						   : git remote -v	 
Step 6: Then add all files to commit 		   : git add .
Step 7: Then commit all files 				   : git commit -m "Initial project push"
Step 8: Then push the code 					   : git push / git push --set-upstream origin master

## ====================== GIT PUSH ================== ##