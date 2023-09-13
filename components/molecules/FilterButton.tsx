import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type FilterButtonProps = {
  category: string;
  selected: boolean;
  onPress: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({
  category,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.filterButton, selected && styles.selectedFilterButton]}
      onPress={onPress}
    >
      <Text style={[styles.filterButtonText, selected && styles.selectedFilterButtonText]}>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filterButton: {
    flex: 0.3,
    marginTop: -15,
    marginBottom: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
  },
  filterButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    color: '#808080',
  },
  selectedFilterButton: {
 
  },
  selectedFilterButtonText: {
    color: '#000', 
  },
});

