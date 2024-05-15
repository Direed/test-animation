const HEADERS = [
    '#',
    'Model Name',
    'Average',
    'ARC',
    'HellaSwag',
    'MMLU',
    'TruthfulQA',
    'Winogrande',
    'GSM8K',
    'Usage'
]

const DATA = [
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'up',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'no_changes',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
    {
        ranking: 'down',
        modelName: 'davidkim205/Rhea-72b-v0.5',
        average: '81.22',
        arc: '79.78',
        hellaSwag: '91.15',
        mmlu: '77.95',
        truthfulQa: '74.50',
        winogrande: '87.85',
        gsm8k: '76.12',
        usage: '1,384,193'
    },
]

export {
    HEADERS,
    DATA
}