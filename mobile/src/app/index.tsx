import { Header } from "@/components/header"
import { View } from "react-native"

export default function Home() {
  return (
    <View className="flex-1 pt-12">
      <Header title="Faça seu pedido" cartQuantityItems={1}/>
    </View>
  )
}