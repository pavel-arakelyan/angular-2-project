import { Observable } from 'rxjs/Observable';
import {TranslateLoader} from 'ng2-translate/ng2-translate';

export declare class CustomTranslateLoader implements TranslateLoader {
    private prefix: string;
    private suffix: string;

    constructor(prefix:string, suffix:string);

    /**
     * Gets the translations from local path
     * @param lang
     * @returns {any}
     */
    getTranslation(lang:string):Observable<any>;
}