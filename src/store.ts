import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { routeSlice } from './routes/routeSlice';

export const store = configureStore({
  reducer: { [routeSlice.name]: routeSlice.reducer }
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
