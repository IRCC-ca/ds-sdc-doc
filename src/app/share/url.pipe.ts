import { Pipe, PipeTransform } from '@angular/core'
import { Url } from './services/url.service';
import { StorageKeys } from './global-params';

/**
 * Pipe to translate the url in html.
 * example: url='/home' | urlTranslate will change url to
 * url = '/en/home' or '/fr/domicile'
 */

@Pipe({
  name: 'urlTrans',
})
export class UrlPipe implements PipeTransform {
  transform(value: string): string {
    const locale = sessionStorage.getItem(StorageKeys.Locale);
    return Url.translateUrlWithLang(value, locale);
  }
}