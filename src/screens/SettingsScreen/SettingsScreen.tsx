import React from 'react';
import { Box, HStack, Switch, Text } from 'native-base';
import { useTopicsSettings } from 'src/hooks/useTopicsSettings';

export function SettingsScreen() {
  const [topics, setTopicSettings] = useTopicsSettings();

  return (
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
    </Box>
  );
}
