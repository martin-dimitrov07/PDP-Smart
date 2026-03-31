import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DocentiService } from '../shared/services/docenti.service';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    public readonly docentiService: DocentiService = inject(DocentiService);

    private router: Router = inject(Router);

    ngOnInit() {
        this.docentiService.GetEmailDocente().subscribe({
            next: data => {
                console.log(data);
            },
            error: err => {
                if (err.status == 401)
                    this.router.navigate(["/login"]);
                else
                    console.error(err.status + ": " + err.error);
            }
        })
    }
}
