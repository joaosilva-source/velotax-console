import { useState } from "react";
import FormSolicitacao from "../components/FormSolicitacao";
import Logs from "../components/Logs";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import "../styles/globals.css";

export default function Home() {
  const [logs, setLogs] = useState([]);

  const registrarLog = (msg) => {
    setLogs((prev) => [{ msg, time: new Date().toLocaleString() }, ...prev]);
  };

  return (
    <>
      <Head>
        <title>Velotax • Painel</title>
      </Head>
      <div className="min-h-screen bg-[var(--bg)] text-white px-6 py-10">
        <Toaster position="top-right" />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Velotax • Painel de Solicitações</h1>
          <p className="text-[var(--muted)] mb-6">Envie solicitações para o WhatsApp</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FormSolicitacao registrarLog={registrarLog} />
            </div>

            <div className="border border-white/10 bg-[var(--panel)] rounded-xl p-4 shadow-xl h-[640px] overflow-auto">
              <h2 className="text-lg font-semibold mb-3">Logs</h2>
              <Logs logs={logs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
