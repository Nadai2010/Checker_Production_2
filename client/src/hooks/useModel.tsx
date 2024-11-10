import { useDojoStore } from "../components/Checker";
import { schema } from "../bindings";

/**
 * Custom hook to retrieve a specific model for a given entityId within a specified namespace.
 *
 * @param entityId - The ID of the entity.
 * @param model - The model to retrieve, specified as a string in the format "namespace-modelName".
 * @returns The model structure if found, otherwise undefined.
 */
function useModel<N extends keyof typeof schema, M extends keyof typeof schema[N] & string>(
    entityId: string,
    model: `${N}-${M}`
): typeof schema[N][M] | undefined {
    const [namespace, modelName] = model.split("-") as [N, M];

    // Select only the specific model data for the given entityId
    const modelData = useDojoStore(
        (state) =>
            state.entities[entityId]?.models?.[namespace]?.[modelName] as
                | typeof schema[N][M]
                | undefined
    );

    return modelData;
}

export default useModel;
