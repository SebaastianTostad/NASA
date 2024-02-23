import React from 'react';
import { fireEvent, screen } from '@testing-library/react'; 
import { renderWithReduxAndRouter } from '../../Shared/Utils/test_utils';
import SearchBar from './SearchBar';


describe('SearchBar Component', () => {
    test('updates search text in redux on input change', () => {
      renderWithReduxAndRouter(<SearchBar />);
      const searchInput = screen.getByPlaceholderText("Search NASA Collections");
      fireEvent.change(searchInput, { target: { value: 'Mars' } });
      expect(searchInput.value).toEqual('Mars');
    });
  });
  