import { ActionPanel, Detail, List, Action, getPreferenceValues } from "@raycast/api";
import DataFetcher from "./components/DataFetcher";

interface HevyKey {
  key: string;
}

export default function Command() {
  const preferenceValues = getPreferenceValues<HevyKey>();
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Get my routines"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<DataFetcher url="https://api.hevyapp.com/v1/routines" token={preferenceValues.key} />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
