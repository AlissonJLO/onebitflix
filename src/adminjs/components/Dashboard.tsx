// src/adminjs/components/Dashboard.tsx

import {
  H1,
  H2,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@adminjs/design-system";
import { ApiClient, useCurrentAdmin } from "adminjs";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

interface DashboardData {
  Cursos: number;
  Episódios: number;
  Categorias: number;
  Usuários: number;
}

const Dashboard: React.FC = () => {
  const [resources, setResources] = useState<DashboardData | undefined>();
  const [currentAdmin] = useCurrentAdmin();

  const api = new ApiClient();
  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const res: AxiosResponse<DashboardData> = await api.getDashboard();
    console.log(res.data);
    setResources(res.data);
  }

  return (
    <section style={{ padding: "1.5rem" }}>
      <H1>Seja bem-vindo, {currentAdmin?.firstName}!</H1>

      <section style={{ backgroundColor: "#FFF", padding: "1.5rem" }}>
        <H2>Resumo</H2>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#FF0043" }}>
              <TableCell style={{ color: "#FFF" }}>Recurso</TableCell>
              <TableCell style={{ color: "#FFF" }}>Registros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources ? (
              Object.entries(resources).map(([resource, count]) => (
                <TableRow key={resource}>
                  <TableCell>{resource}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </section>
    </section>
  );
};

export default Dashboard;
