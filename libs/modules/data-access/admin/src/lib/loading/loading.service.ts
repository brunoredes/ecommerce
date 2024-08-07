import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSignal = signal(false);
  public loading = this.loadingSignal.asReadonly();
  loadingMap = new Map<string, boolean>();

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error(
        `The request URL must be provided to the ${LoadingService.name} setLoading function`,
      );
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSignal.set(true);
    } else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.loadingSignal.set(false);
    }
  }
}
