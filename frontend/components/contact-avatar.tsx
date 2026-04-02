
import {View,Text, ScrollView} from "react-native"
import contacts from '@/data/contacts.json';


export default function ContactAvatar ()

{
  const formatNumber = (number: string) => 
        {const digits = number.replace('639', '');
        return `+639 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;};
        
                
                                

    return( 
    
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    {contacts.map((contact) => (
                      <View key={contact.relative_id} className="items-center mr-6">

                        <View className="w-16 h-16 rounded-full bg-[#3723A9] justify-center items-center mb-2">
                          <Text className="text-white text-xl font-bold">
                            {contact.relative_name.charAt(0).toUpperCase()}
                          </Text>
                        </View>

                        <Text className="font-bold">{contact.relative_name}</Text>
                        <Text className="text-sm font-semibold">{formatNumber(contact.mobile_number)}</Text>

                      </View>
                    ))}

            </ScrollView>);
}