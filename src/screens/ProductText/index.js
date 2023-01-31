import {Text, StyleSheet, Image} from 'react-native';
// Trong 1 file chỉ 1 function được export dạng default
// Nếu export default thì khi import không cần {}
// Nếu export không default thì bắt buộc có {} và đúng tên
export function ProductImage (props) {
    return (
       
        <Image
            style={styles.image}
            source={{uri: 'https://f10-zpc.zdn.vn/7422848444288670503/388edd8e7055ab0bf244.jpg'}}
        />
        
    );
}
export function ProductImage2 (props){
    return (
        <Image
        style={styles.image}
            source={{uri: 'https://f2-zpc.zdn.vn/6930463068936446819/d9ca033787cf5c9105de.jpg'}}
        />
    )
}

// export default function ProductText ({name}) {
export default function ProductText (props) {
    // props là 1 obj truyền từ cha sang
    // ở đây cần có 1 key tên là name
    const name = props.name;
    const desc = props.desc;

    return (
        // <Text style={styles.text}>{props.name}</Text>
        <>
            <Text style={styles.text}>{name}</Text>
            <Text>{desc ? desc : 'Updating...'}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'blue'
    },
    image: {
        width: 100,
        height: 100,
        marginLeft : 20,
        marginTop :30,
        borderRadius: 200 / 2,
       
    }
});
