import React from 'react';
import { makeStyles } from '@material-ui/core';
import { View } from '../../../../components/Common';
import styles from './styles';

const useStyles = makeStyles(styles);

const VaccinePassportSkeleton = () => {
  const styles = useStyles();

  return (
    <View className={styles.card}>
      <View className={styles.skeleton} />
    </View>
  )
}

export default VaccinePassportSkeleton;