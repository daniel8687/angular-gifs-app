import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/side-menu/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.services';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifService = inject(GifService);
}
