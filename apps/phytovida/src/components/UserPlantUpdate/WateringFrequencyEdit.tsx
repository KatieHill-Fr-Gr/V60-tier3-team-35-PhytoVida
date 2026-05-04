import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Check, X } from "lucide-react"
import { useState } from "react"

interface PropType {
    setEditMode: any,
    userPlantId: number,
    defaultValue: number | null,
    updateUserPlantFields: any
}
const WateringFrequencyEdit = ({ setEditMode, userPlantId, defaultValue, updateUserPlantFields }: PropType) => {
    const [wateringFrequency, setWateringFrequency] = useState<number | null>(defaultValue);

    const handleSubmitUpdate = () => {
        updateUserPlantFields.mutate({
            userPlantId,
            body: {
                fields: [{ name: "wateringFrequency", value: wateringFrequency }]
            }
        }, {
            onSuccess: (d: any) => {
                console.log("Updated")
                console.log(d);
                setEditMode(false);
            },
            onError: (e: any) => {
                console.log("Error")
                console.log(e)
            }
        }
        )
    }
    return (
        <div className="flex mt-4">
            <div className="flex gap-2 items-center">
                <p>Every</p>
                <Input
                    type="number"
                    min={1}
                    value={wateringFrequency ? wateringFrequency : ""}
                    onChange={(e) => { setWateringFrequency(Number(e.target.value)) }}
                    className="w-30 bg-white" />
                <p>days</p>
            </div>
            <div className="flex gap-2 ml-auto">
                <Button
                    className="rounded-4xl bg-white text-black hover:bg-gray-100"
                    onClick={() => setEditMode(false)}
                ><X /></Button>
                <Button
                    className="rounded-4xl"
                    onClick={() => handleSubmitUpdate()}><Check />
                    {updateUserPlantFields.isPending && "..."}
                </Button>
            </div>
        </div>
    )
}

export default WateringFrequencyEdit
