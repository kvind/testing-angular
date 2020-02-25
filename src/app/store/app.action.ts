export class JsonPlaceHolderRequest {
    static readonly type = '[app] json placeHolder request';

    constructor(public payload?: any) {

    }
}

export class JsonPlaceHolderSuccess {
    static readonly type = '[app] json placeHolder success';

    constructor(public payload: any) {

    }
}

export class JsonPlaceHolderError {
    static readonly type = '[app] json placeHolder error';

    constructor(public payload: Error) {

    }
}
