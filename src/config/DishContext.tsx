import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of your context data
interface DishContextData {
  // Your context data here
  name: string;
  description: string;
  recipe: string;
  image: string;
  updateDish: (newName: string, newDesc: string, newRecipe: string, newImage: string) => void;
}

// Create the context with an initial value (this will be used if a component is rendered outside the provider)
const DishContext = createContext<DishContextData | undefined>(undefined);

// Create a provider component that will wrap your app
interface DishContextProviderProps {
  children: ReactNode;
}

export const DishContextProvider: React.FC<DishContextProviderProps> = ({ children }) => {
  // Your state or any other logic here
  const [name, setName] = React.useState('DefaultName');
  const [description, setDescription] = React.useState('default description');
  const [recipe, setRecipe] = React.useState('default recipe');
  const [image, setImage] = React.useState('default image');

  // Function to update the name
  const updateDish = (newName: string, newDesc: string, newRecipe: string, newImage: string) => {
    setName(newName);
    setDescription(newDesc)
    setRecipe(newRecipe)
    setImage(newImage)
  };

  // Provide the context value to the components in the tree
  const contextValue: DishContextData = {
    name,
    description,
    recipe,
    image,
    updateDish,
  };

  return <DishContext.Provider value={contextValue}>{children}</DishContext.Provider>;
};

// Create a custom hook to consume the context
export const useDishContext = () => {
  const context = useContext(DishContext);
  if (!context) {
    throw new Error('useDishContext must be used within a DishContextProvider');
  }
  return context;
};