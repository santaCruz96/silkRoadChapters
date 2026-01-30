interface CheckboxProps {
    use?: "register" | "payment"
    id?: string,
    checked?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
    use,
    id,
    checked,
    onChange
}: CheckboxProps) {

    return (
        <label className="flex items-center cursor-pointer relative">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={false}
                className={`peer h-5 w-5 rounded-sm cursor-pointer transition-all appearance-none bg-light
                    hover:shadow-md ${use === 'register' ? 'checked:bg-accent-success' : 'checked:bg-light'} 
                    shadow-[0_8px_20px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(0,0,0,0.08)]`}
                id={id}
            />
            <span 
                className={`absolute opacity-0 peer-checked:opacity-100 top-1/2 
                    left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none
                    ${use === 'register' ? 'text-light' : 'text-accent-success'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
            </span>
        </label>
    );
};