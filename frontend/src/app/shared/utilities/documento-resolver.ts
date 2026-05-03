import { ResolveFn } from '@angular/router';
import { DocumentiService } from '../services/documenti.service';
import { inject } from '@angular/core';

export const documentoResolver: ResolveFn<boolean> = (route, state) => {
    const documentiService: DocumentiService = inject(DocumentiService);

    return documentiService.GetDocumentoById(route.paramMap.get('studenteEmail')!, new Date(route.paramMap.get('annoScolastico')!.split("/")[0] + "-09-01"));
};
