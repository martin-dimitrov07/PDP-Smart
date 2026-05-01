import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentiEditSection } from './documenti-edit-section/documenti-edit-section';
import { DocumentiEditHeader } from './documenti-edit-header/documenti-edit-header';

@Component({
    selector: 'app-documenti-edit',
    imports: [DocumentiEditSection, DocumentiEditHeader],
    templateUrl: './documenti-edit.html',
    styleUrl: './documenti-edit.css',
})
export class DocumentiEdit {
    annoScolastico: string = "";
    studenteEmail: string = "";
    private readonly activatedRouter: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(){
        this.annoScolastico = this.activatedRouter.snapshot.paramMap.get("annoScolastico")!;
        this.studenteEmail = this.activatedRouter.snapshot.paramMap.get("studenteEmail")!;
    }

}
