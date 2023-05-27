import { useCallback, useEffect, useMemo, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { AcademiesList, DevicesList, UINoData } from "../components";
import { getAcademiesLogs } from "../services";
import { transformDataLogs } from "../transformers";
import { TModifiedAcademiesData, TNullable } from "../models";

const ScreenMain = () => {
  const [academies, setAcademies] =
    useState<TNullable<TModifiedAcademiesData>>(null);

  const [chosenAcademyId, setChosenAcademyId] =
    useState<TNullable<string>>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const dataArray = await getAcademiesLogs();
        if (!dataArray || !dataArray.length) return;
        const wantedData = transformDataLogs(dataArray);
        setAcademies(wantedData);
      } catch (error) {
        console.log("error transforming data", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const academiesToShow = useMemo(() => {
    if (!academies) return [];
    return Object.values(academies).sort(
      (academyA, academyB) => academyB.batteryIssues - academyA.batteryIssues
    );
  }, [academies]);

  const devicesToShow = useMemo(() => {
    if (!academies || !chosenAcademyId) return [];
    const wantedAcademy = academies[chosenAcademyId];
    return wantedAcademy.devices.sort(
      (deviceA, deviceB) => deviceB.usagePerDay - deviceA.usagePerDay
    );
  }, [academies, chosenAcademyId]);

  const handleItemClick = useCallback(
    (academyId: string) => setChosenAcademyId(academyId),
    []
  );

  return (
    <Container>
      <Box paddingY={4}>
        <UINoData isLoading={isLoading} isEmpty={!academies} />
        {academies && (
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography textAlign="center" variant="h3">
                  Academies
                </Typography>
                <Box>
                  <AcademiesList
                    selectedId={chosenAcademyId}
                    data={academiesToShow}
                    onItemClick={handleItemClick}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography textAlign="center" variant="h3">
                  Devices
                </Typography>
                <DevicesList data={devicesToShow} />
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default ScreenMain;
