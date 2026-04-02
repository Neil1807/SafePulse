import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MessageSquare } from 'lucide-react-native';
import { useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import logsData from '@/data/logs.json';

const formatNumber = (number: string) => {
  const digits = number.replace('639', '');
  return `+639 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
};

const formatTime = (sent_at: string) => {
  const diff = Math.floor((Date.now() - new Date(sent_at).getTime()) / 1000);
  if (diff < 60) return 'Now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
};

export default function LogsList() {
  const [logs, setLogs] = useState(logsData);

  const deleteLog = (log_id: string) => {
    setLogs(logs.filter((log) => log.log_id !== log_id));
  };

  const renderRightActions = (log_id: string) => (
    <TouchableOpacity
      onPress={() => deleteLog(log_id)}
      className="bg-red-500 justify-center items-center px-6 rounded-[10px] mb-3">
      <Text className="text-white font-bold">Delete</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      {logs.length > 0 ? (
        logs.map((log) => (
          <Swipeable
            key={log.log_id}
            renderRightActions={() => renderRightActions(log.log_id)}>

            <View className="bg-[#D9D9D9] rounded-[15px] p-3 mb-3 shadow">

              <View className="flex-row justify-between items-center mb-1">

                <View className="flex-row gap-2 items-center">
                  <MessageSquare size={12} color="black" />
                  <Text className="font-semibold text-sm">SMS</Text>
                </View>

                <Text className="text-sm text-gray-500">{formatTime(log.sent_at)}</Text>

              </View>
              <Text className="text-sm">
                Message has been sent to {log.relative_name} [{formatNumber(log.mobile_number)}].
              </Text>

            </View>


          </Swipeable>
        ))
      ) : (

        <View className="items-center justify-center py-10">
          <MessageSquare size={40} color="gray" />
          <Text className="text-gray-500 mt-2">No logs yet</Text>
        </View>
        
      )}

    </ScrollView>
  );
}