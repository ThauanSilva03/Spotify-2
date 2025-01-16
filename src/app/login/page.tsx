"use client";
import Image from "next/image";
import Button from "../components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Input from "../components/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const login = () => {
    if (email == "williamgostoso@gmail.com" && password == "123") {
      router.push("/");
    } else {
      console.log("Invalido");
    }
  };

  return (
    <div>
      <div className="h-full bg-gradient-to-b from-[#2A2A2A] to-[#000000] flex flex-col items-center justify-center p-8">
        <div className="w-[740px] h-full py-6 bg-[#121212] rounded-lg flex flex-col items-center">
          <Image
            src="/icons/icon-spotify.svg"
            alt="Icone"
            width={42}
            height={42}
            className="pt-3"
          />
          <h1 className="pt-2 pb-6 text-3xl font-bold text-white">
            Entrar no Spotify 2
          </h1>
          <div className="flex flex-col w-[43%] gap-2">
            <Button
              text="Continuar com o Google"
              path="/loginIcons/icon-google.svg"
            />
            <Button
              text="Continuar com o Facebook"
              path="/loginIcons/icon-facebook.svg"
            />
            <Button
              text="Continuar com a Apple"
              path="/loginIcons/icon-apple.svg"
            />
            <Button text="Continuar com o número de telefone" />
          </div>
          <hr className="border-t w-[65%] my-10 border-[#292929]" />
          <div className="flex flex-col gap-2 w-[45%]">
            <label htmlFor="user" className="font-semibold">
              E-mail ou nome de usuário
            </label>
            <Input
              type="email"
              placeholder="E-mail ou nome de usuário"
              id="user"
              value={email}
              onChange={setEmail}
            />
            <label htmlFor="password" className="font-semibold">
              Senha
            </label>
            <div className="relative w-full">
              <Input
                type="password"
                placeholder="senha"
                id="password"
                value={password}
                onChange={setPassword}
                showPassword={showPassword}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#7C7C7C] hover:text-black"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  <Eye className="text-[#D0D0D1] hover:text-white hover:scale-105" />
                ) : (
                  <EyeOff className="text-[#D0D0D1] hover:text-white hover:scale-105" />
                )}
              </button>
            </div>
            <button
              onClick={login}
              className="rounded-full py-3 px-5 font-semibold bg-[#1ED760] hover:bg-[#3BE477] text-black text-[15px] my-3 hover:scale-105"
            >
              Entrar
            </button>
          </div>
          <a
            href="/reset-password"
            className="my-4 font-medium underline text-white hover:text-[#1ED760]"
          >
            Esqueceu sua senha?
          </a>
          <p className="text-[#AEAEAE] my-4 pb-6">
            Não tem uma conta?
            <a
              href="/register"
              className="my-2 font-medium underline text-white ml-1 hover:text-[#1ED760]"
            >
              Inscrever-se no Spotify 2.
            </a>
          </p>
        </div>
      </div>
      <footer className="bg-[#121212] w-full text-[#999999] flex justify-center items-center h-20">
        <p className="text-xs">
          Este site é protegido pelo reCAPTCHA e está sujeito à Política de
          Privacidade e aos Termos de Serviço do Google.
        </p>
      </footer>
    </div>
  );
}
