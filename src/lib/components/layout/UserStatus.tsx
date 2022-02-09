import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { loginState } from "lib/pages/home/status";
import { clearLocalstorage } from "lib/utils/clearLocalstorage";
import { getTokenFromLocalstorage } from "lib/utils/getToken";
import { isLoginUser } from "lib/utils/isLoginUser";

export default function UserStatus() {
  const userLoginState = useRecoilValue(loginState);
  const setUserLoginState = useSetRecoilState(loginState);
  const router = useRouter();
  const handleLogoutOrGotoLogin = () => {
    if (userLoginState.isLogin) {
      // clear token and logout
      setUserLoginState({
        isLogin: false,
        token: "",
      });
      clearLocalstorage();
    } else {
      router.replace("/login");
    }
  };
  useEffect(() => {
    if (isLoginUser()) {
      setUserLoginState({
        isLogin: true,
        token: getTokenFromLocalstorage(),
      });
    } else {
      router.prefetch("/login");
    }
  }, [setUserLoginState, router]);

  return (
    <IconButton
      aria-label="登录/登出"
      icon={userLoginState.isLogin ? <FiUser /> : <IoIosLogOut />}
      onClick={handleLogoutOrGotoLogin}
    />
  );
}
