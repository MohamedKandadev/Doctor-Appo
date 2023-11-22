import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UserNotLoggedIn = _ => {
  const auth = useSelector(state => state.auth);
  return !auth.user ? <Outlet /> : <Navigate to='/' replace/>
}
