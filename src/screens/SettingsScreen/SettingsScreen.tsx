import React from 'react';
import { Box, HStack, Switch, Text } from 'native-base';
import DeviceInfo from 'react-native-device-info';
import { useTopicsSettings } from 'src/hooks/useTopicsSettings';
import { Screen } from 'app/ui/Screen/Screen';

export function SettingsScreen() {
  const [topics, setTopicSettings] = useTopicsSettings();

  return (
    <Screen>
      <Box p="4">
        <Text fontSize="lg" fontWeight="bold">
          Topics
        </Text>

        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="xl">Ruby</Text>
          <Switch
            onToggle={value => setTopicSettings(value, 'ruby')}
            isChecked={topics.ruby.isEnabled}
          />
        </HStack>

        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="xl">Ruby on Rails</Text>
          <Switch
            onToggle={value => setTopicSettings(value, 'rails')}
            isChecked={topics.rails.isEnabled}
          />
        </HStack>

        <HStack alignItems="center" justifyContent="space-between" mt="5">
          <Text>Version: {DeviceInfo.getVersion()}</Text>
        </HStack>
      </Box>
    </Screen>
  );
}
