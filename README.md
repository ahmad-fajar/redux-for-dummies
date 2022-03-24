# redux-for-dummies

Use redux's `useSelector` and `useDispatch` hooks as alternatives to `connect`.<br/>
Things to note:
- **hooks** available only for **functional components**.
- Combine all values into a single `useSelector` call, or different call for different value? Also read about `equalityFn` (`useSelector`'s 2nd param).

Note:
- For different `useSelector` use strategy, read `useSelectorRenderNote` in `src/components/RightColumn/useSelectorRenderNote.md`.
