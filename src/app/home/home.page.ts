import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../models/song.interface';
import { FirestoreService } from '../services/data/firestore.service';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public songList;
  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
  ) {}

  getSongList(): AngularFirestoreCollection<Song> {
    return this.firestoreService.firestore.collection(`songList`);
  }

  ngOnInit() {
    this.songList = this.getSongList().valueChanges();
  }

}
