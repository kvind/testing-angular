import { Action, State, StateContext, Selector } from '@ngxs/store';
import { JsonService } from '../services/json.service';
import { JsonPlaceHolderError, JsonPlaceHolderRequest, JsonPlaceHolderSuccess } from './app.action';

export class JsonStateModel {
  data: any[];
  error: Error;
  specialForm: any;
}

@State<JsonStateModel>({
  name: 'app',
  defaults: {
    data: undefined,
    error: undefined,
    specialForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class JsonState {

  constructor(private jsonService: JsonService) {

  }

  @Selector()
  static error(state: JsonStateModel) {
    return state.error;
  }

  @Selector()
  static data(state: JsonStateModel) {
    return state.data;
  }

  @Action(JsonPlaceHolderRequest)
  jsonRequest(ctx: StateContext<JsonStateModel>, { payload }: JsonPlaceHolderRequest) {
    this.jsonService.getPosts(payload)
      .subscribe(
        response => ctx.dispatch(new JsonPlaceHolderSuccess(response)),
        error => ctx.dispatch(new JsonPlaceHolderError(error)),
        () => console.log('we complete the request')
      );
  }

  @Action(JsonPlaceHolderSuccess)
  jsonSucess(ctx: StateContext<JsonStateModel>, { payload }: JsonPlaceHolderSuccess) {
    ctx.setState({
      ...ctx.getState(),
      data: payload
    });
  }

  @Action(JsonPlaceHolderError)
  jsonError(ctx: StateContext<JsonStateModel>, { payload }: JsonPlaceHolderError) {
    ctx.setState({
      ...ctx.getState(),
      error: payload
    });
  }
}
