import { useState, useRef, useEffect, startTransition } from "react";

type UseInlineEditOptions = {
  value: string;
  onSave?: (value: string) => void;
};

export function useInlineEdit({ value, onSave }: UseInlineEditOptions) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isEditingRef = useRef(isEditing);

  // Keep ref in sync with state for click-outside detection
  useEffect(() => {
    isEditingRef.current = isEditing;
  }, [isEditing]);

  // Sync editedValue with value when not editing
  useEffect(() => {
    if (!isEditingRef.current) {
      startTransition(() => {
        setEditedValue((prev) => (prev !== value ? value : prev));
      });
    }
  }, [value]);

  // Auto-focus input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  // Handle click outside to save
  useEffect(() => {
    if (!isEditing) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (onSave) {
          onSave(editedValue);
        }
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, editedValue, onSave]);

  const startEditing = () => {
    setEditedValue(value);
    setIsEditing(true);
  };

  return {
    isEditing,
    editedValue,
    setEditedValue,
    inputRef,
    containerRef,
    startEditing,
  };
}
