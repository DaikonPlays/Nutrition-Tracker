import React from 'react';
import { useRouter } from 'next/router';
import { height, weight, age , name} from '@/pages/index'; 

function UserData() {
    const router = useRouter();
    const { height, weight, age, name } = router.query;
    console.log('Height in AnotherComponent:', height);
    console.log('Weight in AnotherComponent:', weight);
    console.log('Age in AnotherComponent:', age);
    if(age )
    return (
        <div>
            <p>{height}</p>
            <p>{weight}</p>
            <p>{age}</p>
            <p>{name}</p>
        </div>
    )
}

export default UserData;