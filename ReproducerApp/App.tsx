import {SketchCanvas} from '@karthiktrcapgemini/react-native-sketch-canvas';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  let sketchRef = useRef();

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <SketchCanvas
          ref={ref => {
            sketchRef = ref;
          }}
          style={{flex: 1}}
          strokeColor={'red'}
          strokeWidth={7}
          onStrokeEnd={() => {
              sketchRef.getBase64('png', true, true, true, true, () => {})
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
