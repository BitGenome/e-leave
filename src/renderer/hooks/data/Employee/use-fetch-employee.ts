/* eslint-disable import/prefer-default-export */
import { useCallback, useEffect, useState } from 'react';
import { EmployeeAttributes } from '../../../../main/models/employee';
import { fetchEmployeesService } from '../../../services/employee/fetch-employees.service';

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeAttributes[] | undefined>(
    [],
  );

  async function fetchEmployees() {
    try {
      const result = await fetchEmployeesService();
      setEmployees(result.data);
    } catch (error) {
      setEmployees(undefined);
      throw new Error(error as any);
    }
  }
  const fetchData = useCallback(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { employees };
};
