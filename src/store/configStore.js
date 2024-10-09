import { legacy_createStore as createStore, applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./tasks";

const store = createStore(reducer, devToolsEnhancer({trace:true}));

export default store;