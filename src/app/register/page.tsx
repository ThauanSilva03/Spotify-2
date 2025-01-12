import Image from "next/image";
import Input from "../components/input";
import ButtonConfirm from "../components/ButtonConfirm";
import Button from "../components/Button";

export default function register() {
  return (
    <div className="bg-[#121212] w-screen min-h-screen flex items-center flex-col justify-between py-2">
      <div className="w-80 pt-6">
        <div className="w-full flex justify-center">
          <Image
            src="/icons/icon-spotify.svg"
            alt="iconSpotfy"
            width={45}
            height={45}
          />
        </div>
        <h1 className="text-[43px]/[48px] font-bold text-white pt-4 text-center">
          Se inscreva e comece a curtir
        </h1>

        <div className="pb-2 mt-14">
          <label htmlFor="email" className="font-semibold text-sm">
            Endereço de e-mail
          </label>
        </div>
        <Input type="email" placeholder="nome@dominio.com" id="email" />
        <p className="pt-1">
          <a
            href="https://support.spotify.com/br-pt/article/reset-password/"
            className="text-[#1ED760] underline text-sm"
          >
            Usar número de telefone.
          </a>
        </p>
        <ButtonConfirm>Avançar</ButtonConfirm>
        <div className="flex items-center justify-center w-full pt-5 pb-8">
          <hr className="border-t border-[#7C7C7C] w-full" />
          <span className="px-2 text-sm">ou</span>
          <hr className="border-t border-[#7C7C7C] w-full" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Button
            text="Inscrever-se com o Google"
            path="/loginIcons/icon-google.svg"
          />
          <Button
            text="Inscrever-se com o Facebook"
            path="/loginIcons/icon-facebook.svg"
          />
          <Button
            text="Inscrever-se com a Apple"
            path="/loginIcons/icon-apple.svg"
          />
        </div>
        <hr className="w-full border-[#292929] border-t my-7" />
        <p className="text-[#AEAEAE] my-4 pb-6 flex justify-center items-center">
          Já tem uma conta?
          <a
            href="/login"
            className="my-2 font-medium underline text-white ml-1 hover:text-[#1ED760]"
          >
            Faça login aqui.
          </a>
        </p>
      </div>

      <footer className="text-[#999999] text-xs flex justify-center items-center flex-col p-4">
        <p>This site is protected by reCAPTCHA and the Google</p>
        <p>
          <span>
            <a
              href="https://policies.google.com/privacy"
              className="underline hover:text-[#1ED760]"
            >
              Privacy Policy
            </a>
          </span>{" "}
          and{" "}
          <span>
            <a
              href="https://policies.google.com/terms"
              className="underline hover:text-[#1ED760]"
            >
              Terms of Service
            </a>
          </span>{" "}
          apply.
        </p>
      </footer>
    </div>
  );
}
