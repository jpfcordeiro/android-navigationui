export type RootStackParamList = {
    Home: undefined;
    Profile: {name: string};
    Settings: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
            
        }
    }
}

