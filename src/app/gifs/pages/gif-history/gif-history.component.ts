import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';
import { GifService } from '../../services/gifs.services';
import { GifListComponent } from '../../components/side-menu/gif-list/gif-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifService = inject(GifService);
  query = toSignal(inject(ActivatedRoute).params.pipe(map((params: any) => params['query'])));
  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}
