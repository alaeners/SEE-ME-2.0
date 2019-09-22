import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-favorite-local',
  templateUrl: './favorite-local.component.html',
  styleUrls: ['./favorite-local.component.scss']
})

export class FavoriteLocalComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}